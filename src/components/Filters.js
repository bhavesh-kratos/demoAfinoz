import React, { Fragment } from 'react';
import { Dropdown, Button } from 'semantic-ui-react'
import * as filters from '../selectors/filterSelector';

const Filters = ({ addForkFilter, addLanguageFilter, addSorters, clearFilters }) => (
    <Fragment>
        <Dropdown text='Filter' icon='filter' floating labeled button className='icon'>
            <Dropdown.Menu>
                <Dropdown.Header icon='tags' content='Sort by created date' />
                <Dropdown.Divider />
                <Dropdown.Item icon='sort alphabet down' text='Old to new' onClick={() => addSorters(filters.CREATED_DATE_ASCEND)} />
                <Dropdown.Item icon='sort alphabet up' text='New to Old' onClick={() => addSorters(filters.CREATED_DATE_DESCEND)} />
                <Dropdown.Header icon='tags' content='Sort by updated date' />
                <Dropdown.Divider />
                <Dropdown.Item icon='sort alphabet down' text='Old to new' onClick={() => addSorters(filters.UPDATED_DATE_ASCEND)} />
                <Dropdown.Item icon='sort alphabet up' text='New to Old' onClick={() => addSorters(filters.UPDATED_DATE_DESCEND)} />
                <Dropdown.Divider />
                <Dropdown.Header icon='fork' content='Filter by forked' />
                <Dropdown.Divider />
                <Dropdown.Item text='Yes' onClick={() => addForkFilter(filters.FORK_ON)} />
                <Dropdown.Item text='No' onClick={() => addForkFilter(filters.FORK_OFF)} />
                <Dropdown.Divider />
            </Dropdown.Menu>
        </Dropdown>
        <Button icon='trash' onClick={() => clearFilters()}/>
    </Fragment>
)

export default Filters;