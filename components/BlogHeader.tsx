import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import styles from './BlogHeader.module.css'

const socialMedia = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/chus.vn',
    icon: <BsFacebook size={25} />,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/chus.vn',
    icon: <BsInstagram size={25} />,
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/channel/UC9Z3Z0ZJX6Z8Z9Z9Z9Z9Z9Z9',
    icon: <BsTwitter size={25} />,
  },
]

const category = [
  'Food & Drink',
  'Heath & Beauty',
  'Travel',
  'Gift ideas',
  'Green lifestyle',
  'NEWS',
]
export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            {title}
          </h1>
          <h4
            className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4>
        </header>
      )

    case 2:
      return (
        <>
          <header className="flex justify-between items-center pb-8 mb-8 pt-8 border border-1 border-x-0 border-t-0 border-slate-200">
            <h2 className=" text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter flex items-center">
              <Link href="/" className="hover:underline">
                <img
                  src="https://chus.vn/images/logo-blog.png"
                  alt="hallo"
                  width="300"
                />
              </Link>
            </h2>

            <div className="list-style list-none">
              {socialMedia.map((item) => (
                <li key={item.name} className="inline-block mr-4">
                  <a href={item.url}>{item.icon}</a>
                </li>
              ))}
            </div>
          </header>
          <div className="flex justify-berween w-full py-2">
            {category.map((item, index) => (
              <span
                key={index}
                className="cate flex-1 text-center block uppercase font-bold border border-1 border-y-0 border-slate-1  p-5"
                data-selected={index === 0}
              >
                {item}
              </span>
            ))}
          </div>
          <style jsx>{`
            .cate {
              background-color: #fff;
              color: #021c2c;
              cursor: pointer;
            }
            .cate:hover {
              background-color: #021c2c;
              color: #edc900;
            }
            .cate[data-selected='true'] {
              background-color: #021c2c;
              color: #edc900;
            }
          `}</style>
        </>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
