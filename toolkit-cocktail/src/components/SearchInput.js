import React, { useRef } from 'react'
import './SearchInput.css';
import { useDispatch } from 'react-redux';
import { fetchSearchCocktail } from '../redux/features/cocktailSlice';

const SearchInput = () => {
	const searchValue = useRef();
	const dispatch = useDispatch()

	const handleChangeSearch = () => {
		const searchText = searchValue.current.value;
		dispatch(fetchSearchCocktail({ searchText }))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<section className='section search'>
			<form className="search-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">Search for cocktail</label>
					<input type='text' name='name' id='name' ref={searchValue} onChange={handleChangeSearch} />
				</div>
			</form>
		</section>
	)
}

export default SearchInput