import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from 'react-modal';

const noop = () => {};

// https://github.com/reactjs/react-modal
// Styles are passed as an object with 2 keys, 'overlay' and 'content' like so
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(51, 51, 51, .55)',
        zIndex: 100
    },
    content: {
        boxShadow: '0 4px 16px rgba(0, 0, 0, .5)',
        border: '1px solid #ccc',
        borderRadius: 0,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: 0,
        msTransform: 'translate(-50%, -50%)', // IE9
        transform: 'translate(-50%, -50%)'
    }
};

class ModalOverlay extends Component {
    static propTypes = {
        // Specify whether to show the modal.
        show: PropTypes.bool,

        // By default the modal is closed when clicking the overlay area. You can pass 'closeOnOverlayClick' prop with 'false' value if you want to prevent this behavior.
        closeOnOverlayClick: PropTypes.bool,

        // A callback fired after opening a modal.
        onOpen: PropTypes.func,

        // A callback fired when clicking the close button (x) or the overlay area.
        onClose: PropTypes.func
    };
    static defaultProps = {
        show: true,
        closeOnOverlayClick: true,
        onOpen: noop,
        onClose: noop
    };

    render() {
        const {
            children,
            show,
            closeOnOverlayClick,
            onOpen,
            onClose
        } = this.props;

        return (
            <Modal
                isOpen={show}
                onAfterOpen={onOpen}
                onRequestClose={onClose}
                shouldCloseOnOverlayClick={closeOnOverlayClick}
                style={customStyles}
                contentLabel="Modal"
            >
                {children}
            </Modal>
        );
    }
}

export default ModalOverlay;
