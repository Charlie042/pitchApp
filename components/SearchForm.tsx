import React from 'react'
import Form from 'next/form'
import SearchReset from './SearchReset'
import { Search } from 'lucide-react'
import { Button } from './ui/button'

const SearchForm = ({query}: {query?: string}) => {



  return (
    <Form action='/' scroll={false} className='search-form' >
        <input type="query" placeholder='Search' name='query' defaultValue={query} className='search-input2'/>
        <div className='flex gap-2'>
     {query && <SearchReset/> }   
     <Button type='submit' className='search-btn text-white'><Search/></Button>
        </div>
        </Form>
  )
}

export default SearchForm