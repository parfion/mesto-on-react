import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup ({ isOpen, onClose, deleteCard, onCardDelete, isLoading}) {

  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(deleteCard);
  }
  
  return (
    <PopupWithForm id="formDeleteCard" title="Вы уверены?" name="formDeleteCard" isOpen={isOpen} onClose={onClose} 
    buttonText={`Да`} buttonLabelText={"Потвердить удаление карточки"} onSubmit={handleSubmit} isLoading={isLoading} 
    loadingButton={'Удаление...'}>
    </PopupWithForm>
  )
};

export default DeleteCardPopup;