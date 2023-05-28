import { Tab } from '@headlessui/react';
import { useState } from 'react';
import TabDetails from './TabDetails';
import TabReviews from './TabReviews';
import TabPhotos from './TabPhotos';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs({ place }) {
  const [categories] = useState(['Detalles', 'Reseñas', 'Fotos']);

  return (
    <div className='w-full max-w-md pt-6'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-primary-900'>
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                  selected
                    ? 'bg-primary-700 shadow text-white'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-3'>
          <Tab.Panel>
            <TabDetails place={place} />
          </Tab.Panel>

          <Tab.Panel>
            <TabReviews place={place} />
          </Tab.Panel>

          {place && place.photos && (
            <Tab.Panel>
              <TabPhotos photos={place.photos} />
            </Tab.Panel>
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
