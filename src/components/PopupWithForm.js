function PopupWithForm({name, title, buttonText, children, isOpen, onClose}) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form id={name} className="form popup__form" name={name}>
          {children}
          <button className="button popup__save-button" type="submit" 
          aria-label="Потвердить удаление карточки">{buttonText}</button>
        </form>

        <button className="popup__close-button popup__close-button_profile" type="button" 
        aria-label="Закрыть попап профайла" onClick={onClose}></button>
      </div>
  </div>
  )
}

export default PopupWithForm;

