import type { MentionFeature } from '../types';

// TODO: Question for Profesor, on slack is used after mentioning Profesor - string | string[]
const question: MentionFeature['question'] = 'your question';

const middleware: MentionFeature['middleware'] = async (middlewareArgs) => {
  // TODO: Action to do and response for the question
};

export default { question, middleware };
