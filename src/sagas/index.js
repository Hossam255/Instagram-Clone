import { call, put, takeEvery } from 'redux-saga/effects'
import { UPDATE_CARDES_SAGA, UPDATE_USERS_SAGA, updateCards, updateUsers } from '../redux/action/action'
import { fetchCards } from "../../src/api/cardServies"
import { fetchUsers } from "../../src/api/userService"

function* getCardsFetch() {
    const cards = yield call(fetchCards)
    yield put(updateCards(cards))
}

function* getUsersFetch() {
    const cards = yield call(fetchUsers)
    yield put(updateUsers(cards))
}


function* mySaga() {
    yield takeEvery(UPDATE_CARDES_SAGA, getCardsFetch)
    yield takeEvery(UPDATE_USERS_SAGA, getUsersFetch)
}



export default mySaga