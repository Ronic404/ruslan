export default function VoiceGenerator(text: string): void {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang='ru-RU'
  speechSynthesis.speak(utterance);
  return;
}
