import React from 'react'
import Modal from 'react-modal'
import BudgetForm from './BudgetForm'
import ExpenseForm from './ExpenseForm'

Modal.setAppElement('#root')
const ExpenseModal = ({
    showModal,
    setShowModal,
    modalType,
    handleBudgetChange,
    createExpense,
    userID
}) => {

    const modalToShow = modalType === 'budget'
        ? <BudgetForm setShowModal={setShowModal} handleBudgetChange={handleBudgetChange} userID={userID} />
        : <ExpenseForm setShowModal={setShowModal} createExpense={createExpense} userID={userID} />

    return (
        <Modal
            style={{
                content:
                {
                    top: '25.3%',
                    left: '15%',
                    width: '25%',
                    height: '50%',
                    backgroundColor: '#333333',
                    borderRadius: '0 5% 5% 0'
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
