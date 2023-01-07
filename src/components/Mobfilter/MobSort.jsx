import React, { useState } from 'react';
import './mobfilter.css';

import { RiSortDesc } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
// import "jquery-ui-dist/jquery-ui";
import Form from 'react-bootstrap/Form';

import { BiFilterAlt } from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';

const MobSort = () => {

    const [sort, setSort] = useState(false);

    return (



        <>
 {/* <button class="css-11bcsxn" data-bs-toggle="modal" data-bs-target="#exampleModal2">sort</button>
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel2">Sort By</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        

        <select name="sort" class="sort form-select" id="sort-by-productpage-mobile" onchange="filters.setFilter(this.value)">
          <option value=""> sort by</option>
          <option value="alphabetic">Name (A - Z)</option>
          <option value="priceLowToHigh">Price (Low &gt; High)</option>
          <option value="priceHighToLow">Price (High &gt; Low)</option>
          <option value="topRated">Rating (Highest)</option>
          <option value="lowRated">Rating (Lowest)</option>
          <option value="latest">Latest</option>
          <option value="relevance">Relevance</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <span class="btn btn-primary" onclick="search.search()">Apply</span>
      </div>
    </div>
  </div>
</div> */}

            <div className='sort-popup'>

                <div className='sort' onClick={() => setSort(!sort)}>
                    <span> <RiSortDesc /> Sort</span>
                </div>
                {
                    sort ?
                        <div className='popupshow'>
                            <div className="sort-prf">
                                <span className='sort'><RiSortDesc /> Sort</span>
                                <AiIcons.AiOutlineClose onClick={() => setSort(!sort)} />
                            </div>
                            <hr />
                            <ul>
                                <li className='sort1'>Popularity
                                    <Form.Check type="radio" aria-label="radio 1" />
                                </li>
                                <li className='sort2'>Price Low To High
                                    <Form.Check type="radio" aria-label="radio 1" />
                                </li>
                                <li className='sort3'>Price High To Low
                                    <Form.Check type="radio" aria-label="radio 1" />
                                </li>
                                <li className='sort4'>Newest First
                                    <Form.Check type="radio" aria-label="radio 1" />
                                </li>
                            </ul>


                        </div> : null
                }



            </div>

        </>


    )
}

export default MobSort