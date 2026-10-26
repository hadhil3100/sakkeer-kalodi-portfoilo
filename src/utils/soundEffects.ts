class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.init();
      this.play(880, 'sine', 0.1, 0.05);
    }
    return this.enabled;
  }

  public play(freq: number = 600, type: OscillatorType = 'sine', duration: number = 0.08, vol: number = 0.04) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy
    }
  }

  public click() {
    this.play(1200, 'triangle', 0.04, 0.02);
  }

  public powerUp() {
    this.play(1046.5, 'sine', 0.25, 0.07);
  }
}

export const sound = new SoundEngine();
