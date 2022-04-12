import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className='notes__content'>
                <input
                    type="text"
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                />
                <textarea
                    placeholder='What happened today'
                    className='notes__textarea'
                >
                </textarea>
                <div className='notes__img'>
                    <img
                        src='https://us.123rf.com/450wm/ragemax/ragemax2006/ragemax200600692/148492947-la-bah%C3%ADa-de-torre-dell-orso-con-sus-altos-acantilados-en-salento-puglia-italia-mar-turquesa-y-cielo-.jpg?ver=6'
                        alt='imagen'
                    ></img>
                </div>
            </div>
        </div>
    )
}
