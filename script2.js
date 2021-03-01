
// const cors = require('cors');
// const express = require('express');
// const superagent = require('superagent');
// require('dotenv').config();

// const app = express();
// app.use(cors());

// const PORT = process.env.PORT || 3030;



// const happyData = superagent.get('http://api.wefeelfine.org:8080/ShowFeelings?feeling=happy');
// console.log(happyData);
const trainingData = [
  // {input: 'Today was such a great day.', output: 'Happy'},
  // {input: 'I am so happy today.', output: 'Happy'},
  // {input: 'Today was such a perfect day.', output: 'Happy'},
  // {input: 'I finally got a day off! today is a good day.', output: 'Happy'},
  // {input: 'Going to see my friends, I love seeing friends.', output: 'Happy'},
  // {input: 'Going to see my friends, I love seeing friends.', output: 'Excited'},
  // {input: 'I watched a movie with my friends. It was very satisfying.', output: 'Satisfied'},
  // {input: 'Everything worked exactly as I expected, my plan was perfect.', output: 'Satisfied'},
  // {input: 'Wow, all of those animations work so perfectly together, they never collide.', output: 'Satisfied'},
  // {input: 'today was a bad day.', output: 'Sad'},
  // {input: 'i was bulied at school today, it hurts.', output: 'Sad'},
  // {input: 'my boyfriend broke up with me.', output: 'Sad'},
  // {input: 'i\'m so excited for tomorrow!', output: 'Excited'},
  // {input: 'i cant wait for christmas!', output: 'Excited'},
  // {input: 'camping tomorrow is going to be so much fun!', output: 'Excited'}
  {input: 'Happy', output: 'Happy'},
  {input: 'Content', output: 'Happy'},
  {input: 'cheerful', output: 'Happy'},
  {input: 'cheery', output: 'happy'},
  {input: 'merry', output: 'happy'},
  {input: 'joyful', output: 'happy'},
  {input: 'jovial', output: 'happy'},
  {input: 'jolly', output: 'happy'},
  {input: 'joking', output: 'happy'},
  {input: 'jocular', output: 'happy'},
  {input: 'gleeful', output: 'happy'},
  {input: 'carefree', output: 'happy'},
  {input: 'untroubled', output: 'happy'},
  {input: 'delighted', output: 'happy'},
  {input: 'smiling', output: 'happy'},
  {input: 'unhappy', output: 'sad'},
  {input: 'sorrowful', output: 'sad'},
  {input: 'dejected', output: 'sad'},
  {input: 'regretful', output: 'sad'},
  {input: 'depressed', output: 'sad'},
  {input: 'downcast', output: 'sad'},
  {input: 'miserable', output: 'sad'},
  {input: 'downhearted', output: 'sad'},
  {input: 'down', output: 'sad'},
  {input: 'despondent', output: 'sad'},
  {input: 'desparing', output: 'sad'},
  {input: 'disconsolate', output: 'sad'},
  {input: 'out of sorts', output: 'sad'},
  {input: 'She clearly felt sad to see this day end.', output: 'sad'},
  {input: 'He has sad eyes, like me.', output: 'sad'},
  {input: 'Jackson had never been so happy, and at ease, and she loved Connor with all her heart, yet she was a little sad, feeling they were growing apart.', output: 'sad'},
  {input: 'She approached, a sad smile on her face.', output: 'sad'},
  {input: 'I suppose it would be a sad memory.', output: 'sad'},
  {input: 'I was very, very sad to part with all of my friends in Boston, but I was so eager to see my baby sister I could hardly wait for the train to take me home.', output: 'sad'},
  {input: 'Are you very lonely and sad now?', output: 'sad'},
  {input: 'I guess I should feel sad, but I don\'t.', output: 'sad'},
  {input: 'I shall never forget it: I felt sad and sorry for everyone, for myself, and for everyone.', output: 'sad'},
  {input: 'She seemed so sad for him.', output: 'sad'},
  {input: 'He tried not to think of that sad time, instead blinking away dark memories and focusing on the snow at his feet.', output: 'sad'},
  {input: 'The tall slender girl looked hauntingly sad, and yet proud.', output: 'sad'},
  {input: 'How sad that his smile was so rare.', output: 'sad'},
  {input: 'No. But it\'s so sad reading about it.', output: 'sad'},
  {input: 'She said it with a sad finality, like someone admitting to having a terminal disease.', output: 'sad'},
  {input: 'Now he\'s at least functional but the sad part is he lost nearly all of his memory.', output: 'sad'},
  {input: 'The smile with those full lips was sad, sweet and somehow innocent.', output: 'sad'},

];

const lstm = new brain.recurrent.LSTM();
const result = lstm.train(trainingData, {
  iterations: 500,
  log: details => console.log(details),
  errorThresh: 0.011
});

const run1 = lstm.run('I can\'t wait for the swim meet tomorrow!');
// const run2 = lstm.run('I love going swimming.');
// const run3 = lstm.run('The knife slices so smoothly.');
const run4 = lstm.run('Why is life so hard sometimes?');

console.log( run1);
// console.log(run2);
// console.log(run3);
console.log(run4);


// app.listen(PORT, () => console.log(`app is up on port http://localhost:${PORT}`));