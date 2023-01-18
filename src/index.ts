class Person {
  speak(name?: string) {
    return `Olá ${name}`;
  }
}

const p = new Person();

console.log(p.speak("luan1"));
p.speak("fulano");
