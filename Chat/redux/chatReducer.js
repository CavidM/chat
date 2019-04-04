import * as actions from "../../../../../actions/actionTypes";
import {inboxLoadMessageDispatchers} from "../../../../../config/constants";

let initialState = {
    messages: [],
    params: {
        offset: 0,
        limit: 10
    },
    dispatcher: '',
    loader: {
        newMessage: true,
        scrollTop: false
    }
}

const chatReducer = (state = initialState, action) => {

    let { payload } = action;

    switch (action.type) {
        case actions.GET_INBOX_MESSAGES: {

            if(!Object.keys(payload.messages).length) {

                return state;
            }

            let commonProps = {
                loader: {...initialState.loader, newMessage: false},
                dispatcher: payload.dispatcher,
                params: {
                    ...state.params,
                    ...payload.params
                },
            };

            switch (payload.dispatcher) {
                case inboxLoadMessageDispatchers.scrollTop: {
                    return {
                        ...state,
                        messages: [...payload.messages, ...state.messages],
                        ...commonProps
                    };
                }
                case inboxLoadMessageDispatchers.chatBodyContainerDidMount:
                case inboxLoadMessageDispatchers.sendMessage:
                case inboxLoadMessageDispatchers.changeOfferStatus: {
                    return {
                        ...state,
                        messages: payload.messages,
                        ...commonProps
                    };
                }
                default: {
                    return state;
                }
            }
        }
        case actions.INBOX_MESSAGE_LOADER: {

            return {
                ...state,
                loader: {
                    ...state.loader,
                    ...payload.loader
                },
                dispatcher: payload.dispatcher
            };
        }
        case actions.RESET: {
            return initialState;
        }
        case actions.SET_INBOX_MESSAGE_OFFER_STATUS:
        case actions.SET_INBOX_MESSAGE_READ_STATUS:
        default: {
            return state
        }
    }
}

export default chatReducer;

