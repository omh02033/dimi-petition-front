import petition from './petition';

const rootReducer = petition;
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
