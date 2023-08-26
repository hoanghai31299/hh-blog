import AlertBanner from 'components/AlertBanner'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
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
export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>

        <footer className="x-5 bg-[#ccc] mt-[80px]">
          <div className="mx-auto p container flex flex-col items-center justify-between md:flex-row  py-[40px]">
            <div className="logo flex-1">
              <img src="https://chus.vn/images/logo-blog.png" alt="logo" />
            </div>
            <div className="about-us flex-1">
              <h1 className="text-2xl font-bold">About us</h1>
              <p>
                Official Blog page of CHUS Vietnam. Here, you can easily find
                knowledge, green living tips, sustainable consumption, fashion -
                travel - beauty trends, etc., and the hottest deals from CHUS.
              </p>
              <div className="follow flex gap-5 py-[40px]">
                {socialMedia.map(({ name, url, icon }) => (
                  <a href={url} key={name}>
                    <span>{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
