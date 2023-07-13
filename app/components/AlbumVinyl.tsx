import { useAudioContext } from '@/app/providers/AppState'
import { cn } from '@/app/lib/utils'

export default function AlbumVinyl() {
  const { pause } = useAudioContext()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-xl">Now playing</h1>
      <div className="w-[315px] h-[315px] relative z-10 shados">
        <div className="bg-center bg-cover bg-no-repeat bg-[url(https://hiphop-n-more.com/wp-content/uploads/2016/11/post-malone-stoney-768x768.jpg)] h-[315px] w-[315px] relative z-10" />
        <div
          style={{
            backgroundImage: `url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/83141/vinyl.png'),
                       url('https://hiphop-n-more.com/wp-content/uploads/2016/11/post-malone-stoney-768x768.jpg')`
          }}
          className={cn(
            'vinyl rounded-full w-[300px] h-[300px] absolute top-[5px] left-0',
            {
              'is-playing': !pause
            }
          )}
        />
      </div>
    </div>
  )
}
