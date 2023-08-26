import type { Post } from 'lib/sanity.queries'

const mostview = [
  {
    _id: '1',
    title: '7 things to prepare for a perfect trip',
    imgUrl: 'https://random.imagecdn.app/400/300',
  },
  {
    _id: '2',
    title: "5 tips for a good night's sleep",
    imgUrl: 'https://random.imagecdn.app/400/300',
  },
  {
    _id: '3',
    title: 'Vietnamese cuisine is the best in the world',
    imgUrl: 'https://random.imagecdn.app/400/300',
  },
  {
    _id: '4',
    title: 'Shopping in the US is the best experience',
    imgUrl: 'https://random.imagecdn.app/400/300',
  },
  {
    _id: '5',
    title: 'How to make a perfect cup of coffee',
    imgUrl: 'https://random.imagecdn.app/400/300',
  },
  {
    _id: '6',
    title: 'Make your own pizza at home',
    imgUrl: 'https://random.imagecdn.app/400/300',
  },
]

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="pl-5 border border-0 border-l-[10px] border-[#edc900] mb-3 text-6xl font-bold leading-tight tracking-tighter md:text-5xl uppercase">
        Most View
      </h2>
      <div className="flex flex-wrap justify-berween">
        {mostview.map(({ _id, imgUrl, title }) => {
          return (
            <div
              className="w-1/2 md:w-1/3 mt-7 flex flex-col items-center"
              key={_id}
            >
              <div className="img">
                <img src={`${imgUrl}?${_id}`} alt={title} />
              </div>
              <span className="title text-xl font-bold">{title}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
