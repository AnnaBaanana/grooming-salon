function PetFinder({findName, searchByName, findPhone, searchByPhone}) {
    

    return(
        <div>
            <h4>Find Pet</h4>
            <form>
                <input 
                    type='text' 
                    name='name_search' 
                    placeholder='search by name' 
                    value={findName}
                    onChange={e => searchByName(e.target.value)}/>
                <input 
                    type='text' 
                    name='phone_search'
                    placeholder='search by phone'
                    value={findPhone}
                    onChange={e => searchByPhone(e.target.value)}
                    />
            </form>
        </div>

    )

}

export default PetFinder;