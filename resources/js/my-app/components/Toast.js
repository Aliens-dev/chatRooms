import React from 'react';


const MyToast = (props) => {

    const hideToast =() => {
        dispatchGlobalState(setToastHiddenAction())
    }

    return (
        <div className={`${globalState.showToast ? 'my-toast' : 'd-none'}`}>
            <div className="my-toast-header">
                {
                    globalState.toastMessage.header
                }
                <i className="fa fa-times close-toast" onClick={hideToast} />
            </div>
            <div className="my-toast-body">
                {
                    globalState.toastMessage.body
                }
            </div>
        </div>
    )
}

export default MyToast;
