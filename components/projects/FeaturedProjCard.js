import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';

const FeaturedProjCard = ({ proj, index }) => (
  <div
    key={proj.id}
    className={` ${
      index !== 1
        ? 'col-span-12 lg:col-start-1 lg:col-end-7'
        : 'col-span-12 lg:col-start-6 lg:col-end-13'
    } text-gray-100 row-start-2 lg:row-start-1 row-end-3 lg:row-end-2 self-center`}
  >
    <h3
      className={`text-xl lg:text-2xl font-bold text-gray-800 ${
        index === 1 ? 'lg:text-right' : ''
      }`}
    >
      {proj.name}
    </h3>
    <article key={proj.id} className="p-6 bg-gray-800 rounded-lg">
      <p className="mb-4 text-xs text-gray-300 md:text-sm">
        {proj.description}
      </p>
      <div className="flex items-center justify-start space-x-4">
        <a
          href={proj.liveUrl}
          className="btn btn-main"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <BiLinkExternal className="ml-4 text-xl" />
        </a>
        <a
          href={proj.repo}
          className="btn btn-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github <AiFillGithub className="ml-4 text-xl" />
        </a>
      </div>
      <div className="flex flex-wrap justify-end mt-10 space-x-4 text-right">
        {proj.keyTechs.map((tech, i) => (
          <small
            key={i}
            className="px-2 py-1 mt-2 text-xs font-medium capitalize border border-gray-500 md:px-4 md:py-2 opacity-70"
          >
            {tech}
          </small>
        ))}
      </div>
    </article>
  </div>
);

export default FeaturedProjCard;
