import React from "react";
import './CounterBlock.css';
import count_block_img from '../../img/CountBlock_image.svg';





const CounterBlock = ({ stats }) => {

    return (
        <div className={'count-block'}>
            <div className={'count-block__style _blue'}>
                <h3>{stats.eventsCount}</h3>
                <span>
                    голосований
                </span>
                <img alt={'картинка для блока справа'} className={'count-block__style-image'} src={count_block_img} />
            </div>
            <div className={'count-block__style _orange'}>
                <h3>23 456 789</h3>
                <span>
                    транзакций
                </span>
                <img alt={'картинка для блока справа'} className={'count-block__style-image'} src={count_block_img} />
            </div>
            <div className={'count-block__style _green'}>
                <h3>{stats.orgsCount}</h3>
                <span>
                    организаций
                </span>
                <img alt={'картинка для блока справа'} className={'count-block__style-image'} src={count_block_img} />
            </div>
            <div className={'count-block__style _yellow'}>
                <h3>{stats.usersCount}</h3>
                <span>
                    уникальных<p>пользователей</p>
                </span>
                <img alt={'картинка для блока справа'} className={'count-block__style-image'} src={count_block_img} />
            </div>
        </div>
    )

}

export default CounterBlock;