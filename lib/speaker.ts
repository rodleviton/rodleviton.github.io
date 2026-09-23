/**
 * The PC speaker. Silent until a visitor turns it on, and never turned on for
 * them. Everything that makes a sound calls beep(), which does nothing while
 * the speaker is off.
 */
type Listener = (enabled: boolean) => void;

let enabled = false;
let context: AudioContext | null = null;
const listeners = new Set<Listener>();

export function isSoundEnabled() {
  return enabled;
}

export function setSoundEnabled(next: boolean) {
  enabled = next;
  listeners.forEach((listener) => listener(enabled));
  if (enabled) beep(1000, 90);
}

export function onSoundChange(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function beep(frequency = 880, milliseconds = 60) {
  if (!enabled || typeof window === "undefined") return;

  context ??= new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "square";
  oscillator.frequency.value = frequency;
  gain.gain.value = 0.03;
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + milliseconds / 1000);
}
