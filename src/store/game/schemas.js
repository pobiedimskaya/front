import { schema } from 'normalizr';

const answerSchema = new schema.Entity('answers');

const questionSchema = new schema.Entity('questions', {
  answers: [answerSchema],
});
const gameConfigSchema = { questions: [questionSchema] };

export { gameConfigSchema };
