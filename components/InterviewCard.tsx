import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';

const InterviewCard = ({interviewId, userId, role, type, techstack, createdAt} :InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? 'mixed' : type;
  const formatedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');

  return (
    <div className='card-border w-full md:w-[360px] min-h-80'>
      <div className='card-interview'>
        <div>
          <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600'>
            <p className='badge-text'>
              {normalizedType}
            </p>
          </div>

          <Image src={getRandomInterviewCover()} alt='avator cover' width={50} height={50} className='rounded-full object-fit size-[50px]' />
          <h3 className='mt-5 capitalize'>
            {role} Interview
          </h3>

          <div className='flex flex-row gap-5 mt-3'>
            <div className='flex flex-row gap-2'>
              <Image src={'calendar.svg'} alt='calendar' width={25} height={25} />
              <p>
                {formatedDate}
              </p>
            </div>
            <div className='flex flex-row gap-2'>
              <Image src={'/star.svg'} alt='star' width={25} height={25} />
              <p>
                {feedback?.totalScore || '--'}/100
              </p>
            </div>
          </div>

          <p className='line-clamp-2 mt-5'>
            {feedback?.finalAssessment || "You have not taken the interview yet. Kindly take it now to sharpen your skills and prowess."}
          </p>
        </div>

        <div className='flex flex-row justify-between'>
          <DisplayTechIcons techStack={techstack}/>

          <Button className='btn-primary'>
            <Link href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}>
              {feedback ? 'Check Feedback' : 'View Interview'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard