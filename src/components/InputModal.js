import React from 'react'
import Modal from 'react-modal'
import BudgetForm from './BudgetForm'
import ExpenseForm from './ExpenseForm'

Modal.setAppElement('#root')
const ExpenseModal = ({
    showModal,
    setShowModal,
    modalType,
    userID,
    categories
}) => {

    const modalToShow = modalType === 'budget'
        ? <BudgetForm setShowModal={setShowModal} userID={userID} />
        : <ExpenseForm setShowModal={setShowModal} categories={categories} />

    return (
        <Modal
            style={{
                content:
                {
                    position: 'relative',
                    left: '15%',
                    top: '174px',
                    width: '500px',
                    height: '500px',
                    backgroundColor: '#333333'
                },
                overlay: {
                    backgroundColor: 'none'
                }
            }}
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
        >
            {modalToShow}
        </Modal>
    )
}

export default ExpenseModal
