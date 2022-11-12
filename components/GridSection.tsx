import React from 'react'
import { ItemData } from '../data/types'
import has from '../utils/has'

export interface Props {
  title: string
  size?: 'sm' | 'md'
  items: ItemData[]
}

const GridSection = ({ title, size = 'md', items }: Props): JSX.Element => {
  return (
    <section className='mb-14'>
      <h2 className='text-white mb-10'>{title}</h2>
      <div>
        {items.map(item => (
          <div key={item.leftText} className={`grid-item ${size === 'md' ? 'mb-10' : 'mb-4'}`}>
            <div className='col-span-4 sm:col-span-1'>
              <p>{item.leftText}</p>
            </div>
            <div className='col-span-4 sm:col-span-3'>
              {has(item, 'url') ? 
                (
                  <a href={item?.url} target="_blank" rel="noreferrer" className='text-white flex items-center'>
                    {item.title}
                    <svg className='w-4 h-4 ml-2' viewBox="0 0 24 24">
                      <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                    </svg>
                  </a>
                ) : (
                <p className='text-white flex items-center'>
                  {item.title}
                </p>
              )}
              {has(item, 'description') && <p className='my-2'>{item?.description}</p>}
              {has(item, 'textStack') && <p className='text-neutral-500'>{item?.textStack}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GridSection