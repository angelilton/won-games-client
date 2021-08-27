import ExploreTemplate, {
  ExploreTempleteProps
} from 'templates/ExploreTemplate'

import filterItemsMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function index(props: ExploreTempleteProps) {
  return <ExploreTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      filterItems: filterItemsMock,
      games: gamesMock
    }
  }
}
