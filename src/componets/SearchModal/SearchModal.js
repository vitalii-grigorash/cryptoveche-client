import React from "react";
import './SearchModal.css';

const SearchModal = (props) => {

    const {
        searchResults,
        handleCurrentEvents,
        resetSearchInput,
        handleReloadDetailsPage
    } = props;

    function onResultClick(result) {
        handleCurrentEvents(result, true);
        resetSearchInput();
        handleReloadDetailsPage();
    }

    return (
        <div className="search-modal">
            {searchResults.length === 0 ? (
                <div className="search-modal__result-container">
                    <p className="search-modal__result">Нет результатов отвечающих запросу</p>
                </div>
            ) : (
                <>
                    {searchResults.map((result) => (
                        <div className="search-modal__result-container" key={result.id} onClick={() => onResultClick(result)}>
                            <p className="search-modal__result">{result.title}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default SearchModal;
