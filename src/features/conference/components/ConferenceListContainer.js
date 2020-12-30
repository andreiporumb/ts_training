import React from 'react'
import ConferenceFilters from './ConferenceFilters'
import ConferenceList from './ConferenceList'
import conferences from 'utils/Mocks/conferences'
import LoadingFakeText from 'components/common/fakeText/LoadingFakeText'


const ConferenceListContainer = () => {
    const { data, loading } = { data: conferences, loading: false } // don't worry about it! it will make a lot more sense after GraphQL

    if (loading) {
        return <LoadingFakeText lines={10} />
    }

    return <>
    <ConferenceFilters />
    <ConferenceList conferences={data} />
</>
}

export default ConferenceListContainer