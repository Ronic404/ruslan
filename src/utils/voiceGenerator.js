export default function VoiceGenerator(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang='ru-RU'
  speechSynthesis.speak(utterance);
  return;
}
