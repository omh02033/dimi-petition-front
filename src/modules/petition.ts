import axios from "axios";
import dayjs from "dayjs";

const GET_PETITIONS_SUCCESS = "petition/GET_PETITIONS_SUCCESS" as const;
const AGREE_RULES = "petitions/AGREE_RULES" as const;

const initialState = {
  petitionData: [],
  isAgree: false,
};

export const getPetitionsSuccess = () => ({ type: GET_PETITIONS_SUCCESS });
export const agreeRules = () => ({ type: AGREE_RULES });

const resToPetition = ({
  _id,
  title,
  likesLength,
  createdAt,
  category,
  status,
}: any) => ({
  id: _id,
  title,
  likes: likesLength,
  createdAt: dayjs(createdAt),
  category: category.name,
  status: status,
});

export const getPetitions = () => async (dispatch: any) => {
  const result = await axios.get("/petitions/");
  if (result.data.status === 401) return;
  dispatch({ type: GET_PETITIONS_SUCCESS, data: result.data.petitions.map(resToPetition) }); // 성공
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_PETITIONS_SUCCESS:
      return {
        ...state,
        petitionData: action.data,
      };
    case AGREE_RULES:
      return {
        ...state,
        isAgree: true,
      };
    default:
      return state;
  }
}
