import { SunIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/outline';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
   <div className="text-white flex flex-col items-center justify-center h-screen px-2">
    <h1 className="text-5xl font-bold mb-12">ChatGPT</h1>

    <div className="flex space-x-2 text-center">
      <div className="">
        <div className="flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-6 w-6" />

          <h2>Examples</h2>
        </div>

        <div className="space-y-2">
          <p className="infoText">Explain Something to me</p>
          <p className="infoText">What is the difference between a dog and a cat?</p>
          <p className="infoText">What is the color of the sun?</p>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col items-center justify-center mb-5">
          <BoltIcon className="h-6 w-6" />

          <h2>Capabilities</h2>
        </div>

        <div className="space-y-2">
          <p className="infoText">Change the ChatGPT Model to use</p>
          <p className="infoText">Messages are stored in Firebase Firestore</p>
          <p className="infoText">Hot Toast Notifications when ChatGPT is thinking!</p>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col items-center justify-center mb-5">
          <ExclamationTriangleIcon className="h-6 w-6" />

          <h2>Limitations</h2>
        </div>

        <div className="space-y-2">
          <p className="infoText">May occasionally generate incorrect information</p>
          <p className="infoText">May occasionally produce harmful instructions or biased content</p>
          <p className="infoText">Cannot replace human thinking - use your head</p>
        </div>
      </div>
    </div>
   </div>
  )
}
