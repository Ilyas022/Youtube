import '@testing-library/jest-dom'
import 'jest-styled-components'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

process.env.API_URL = 'https://www.test.com'
