import {inboxMessageOfferStatus} from "../../../../../config/constants";
import React from "react";

function OfferStatus(props) {

    let message = props.message;

    let status = '';
    let text = '';
    let accept_reject = 0;

    accept_reject = parseInt(message.accept_reject);

    if(!accept_reject) {
        return '';
    }

    switch (accept_reject) {
        case inboxMessageOfferStatus.wait: {

            break;
        }
        case inboxMessageOfferStatus.accept: {

            status = 'success';
            text = 'Yeni Paylaşım Sayı Onaylandı.';

            break;
        }
        case inboxMessageOfferStatus.reject: {

            status = 'error';
            text = 'Yeni Paylaşım Sayı Onaylanmadı.';

            break;
        }
        default: break;
    }

    return (
        <div className={`Influencer-inbox-message__alert alert-${status}`}>
            {text}
        </div>
    );
}

export default OfferStatus;
