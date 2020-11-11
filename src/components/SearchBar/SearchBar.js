import { render } from '@testing-library/react';
import React from 'react';
import './SearchBar.css';

let sortByOptions = { //Yelp API 
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {

    //dinamicamente cria a lista de itens
    //necessários para mostrar as opções de filtragem
    renderSortByOption() {
        return Object.keys(sortByOptions)
                .map(sortByOption => {
                    let value = sortByOptions[sortByOption];
                    return <li key={value}>{sortByOption}</li>
                });
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOption()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}
export default SearchBar;