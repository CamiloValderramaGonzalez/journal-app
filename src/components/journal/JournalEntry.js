import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://us.123rf.com/450wm/ragemax/ragemax2006/ragemax200600692/148492947-la-bah%C3%ADa-de-torre-dell-orso-con-sus-altos-acantilados-en-salento-puglia-italia-mar-turquesa-y-cielo-.jpg?ver=6)'
                }}
            >
            </div>
            <div className='journal__entry-body'>
                <p className='journal_entry-title'>
                    Titulo
                </p>
                <p className='journal_entry-content'>
                    Contenido Contenido Contenido Contenido
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <spans>Monday</spans>
                <h4>11</h4>
            </div>
        </div>
    )
}
