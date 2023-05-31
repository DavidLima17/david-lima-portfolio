import { FaGithubSquare as Git, FaLinkedin as Linkedin } from 'react-icons/fa';
import { HiOutlineMail as Mail } from 'react-icons/hi';
import { AiOutlineFileText as Resume} from 'react-icons/ai'

const SocialLinks = () => {
//
//
    const links = [
        {id: 1, child: (<>Linkedin <Linkedin size={40}/></>), href: 'https://www.linkedin.com/in/david-lima17/', style: 'rounded-tr-md'},
        {id: 2, child: (<>GitHub <Git size={40}/></>), href: 'https://github.com/DavidLima17'},
        {id: 3, child: (<>Resume <Resume size={40}/></>), href: 'https://gitconnected.com/davidlima17/resume'},
        {id: 4, child: (<>Mail <Mail size={40}/></>), href: 'mailto:david.lima17+MyPortfolio@gmail.com', style: 'rounded-br-md'},
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map(({id, child, href, style}) => (
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-90px] bg-gray-500 hover:ml-[-5px] hover:rounded-md duration-300 ' + style}>
                <a href={href}
                className='flex justify-between items-center w-full text-white'>
                    {child}
                </a>
            </li>
        ))}

      </ul>
    </div>
  )
}

export default SocialLinks
