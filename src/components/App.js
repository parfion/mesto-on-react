import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

	function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

	function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleCardClick(data) {
    setSelectedCard(data);
  };

	function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main 
				onEditProfile={handleEditProfileClick} 
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick} 
        onCardClick={handleCardClick}
			/>
      <Footer />

			<PopupWithForm id="editButton" name="formProfile" title="Редактировать профиль" 
			isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText={`Сохранить`}>
				
				<input id="profile-input" className="popup__input popup__input_value_name" name="name" type="text" required 
        minLength="2" maxLength="40" placeholder="Имя" />
				<span className="profile-input-error form__type-error"></span>
				<input id="profession-input" className="popup__input popup__input_value_profession" name="profession" type="text" 
				required minLength="2" maxLength="200" placeholder="Вид деятельности" />
				<span className="profession-input-error form__type-error"></span>
			</PopupWithForm>

			<PopupWithForm id="addButton" name="formCard" title="Новое место" 
			isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={`Создать`}>
				
				<input id="card-name-input" className="popup__input popup__input_value_name-card" name="image" type="text" 
        placeholder="Название" required minlength="2" maxlength="30" />
        <span className="card-name-input-error form__type-error"></span>
        <input id="card-link-input" className="popup__input popup__input_value_picture-card" name="link" type="url" 
        placeholder="Ссылка на картинку" required />
        <span className="card-link-input-error form__type-error"></span>
			</PopupWithForm>

			<PopupWithForm id="popupAvatar" name="formEditAvatar" title="Обновить аватар" 
			isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText={`Сохранить`}>
				
				<input id="avatar-link-input" className="popup__input popup__input_value_picture-card" name="link" type="url" 
        placeholder="Ссылка на картинку" required />
        <span className="avatar-link-input-error form__type-error"></span>
			</PopupWithForm>

      <ImagePopup id="popupImage" card={selectedCard} onClose={closeAllPopups}></ImagePopup>
    </div>
  );
}

export default App;
