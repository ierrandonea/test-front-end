import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const HotelModal = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            {
                store.modal == true &&
                <div className="container" id="hotelModal">
                    <div className="row">
                        <div className="card modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header flex-display flex-dir-r flexa-jcsb flexa-ai">
                                        <h5 className="textsize-4" id="hotelModalLabel">{ !!store.Hid && store.hotels[store.Hid-1].name}</h5>
                                        <button type="button" className="close textsize-4" data-dismiss="modal" aria-label="Close">
                                            <span onClick={() => actions.setModal()}>&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default HotelModal;