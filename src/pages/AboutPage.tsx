import React from 'react'
import { useHistory }  from  'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory()

   const onReturn = () => {
        history.push('/')
    }

    return (
   <>
   <h1>
       Страница информации
   </h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem facere illo incidunt inventore iste quas. Amet animi aperiam dolor, exercitationem expedita libero nobis quam quas quidem quod ullam.Assumenda corporis libero natus nulla similique. Commodi consequatur ducimus facilis laborum modi quae quibusdam reiciendis repudiandae sed sunt! Architecto ex facilis magnam, nobis nostrum officia perferendis quibusdam sunt voluptas voluptatem.Aliquam at commodi culpa cum deserunt dolores, eaque enim error id ipsum itaque, iure laudantium magnam minima neque nisi officia pariatur quasi quibusdam quos rem sed totam velit voluptate voluptatem?Assumenda at culpa dolorum expedita iure non, odio, odit optio provident rerum voluptatem voluptatibus. Asperiores consequatur est fugiat nulla. At commodi doloribus enim magni molestias nulla omnis reiciendis totam ullam.Commodi distinctio doloremque et maiores omnis ut. Alias aliquam aperiam, aspernatur beatae dolores, ex itaque nulla perferendis quaerat quas qui ratione sequi tempore. Aperiam delectus eos reiciendis repellendus sint tempore.Ab ad aspernatur at atque commodi dolorem fuga, obcaecati omnis voluptas. Beatae corporis dolores dolorum, et facilis fuga illo minima non nostrum quibusdam, quisquam quo ratione recusandae similique sit vitae.Animi blanditiis quisquam quos? Alias beatae dolores error ex itaque nam perferendis placeat qui temporibus voluptas. A ad beatae deleniti in necessitatibus nesciunt officia quasi. Eaque fugiat nulla sapiente vero.Consectetur dolores dolorum ducimus harum impedit ipsa iste iusto, magnam nam necessitatibus possimus, provident quis rerum vel voluptates! Alias animi dignissimos eveniet modi nobis perspiciatis temporibus totam! Deserunt, eius, minus.Accusamus aliquam aut culpa eum ex exercitationem optio quis, rerum sequi voluptate? Aliquam amet, at atque commodi esse explicabo in ipsa iste, nam quas quidem rerum soluta vel veniam voluptatibus?Aut dignissimos exercitationem, facilis fugit id itaque magni nesciunt nihil nostrum, numquam officia perferendis ut, voluptatem. Aliquid amet dicta, dignissimos dolorum eligendi esse libero nostrum quaerat, quis velit, voluptas voluptate.Alias animi culpa cupiditate ea eius ipsum iure minus modi nemo quaerat quidem recusandae sit, tenetur. Aspernatur commodi cupiditate debitis, expedita labore maiores nulla pariatur provident tempora tenetur voluptas voluptate.Dicta, eaque illum nihil numquam rem reprehenderit veniam? In nam officia optio placeat unde. Cupiditate exercitationem minus odio perferendis quae quasi repellendus veritatis. Adipisci animi beatae harum ipsam possimus sint.Ab aliquam, atque dolore facere incidunt iste laborum molestias natus praesentium quia repudiandae saepe soluta sunt totam voluptatibus! Ad blanditiis consequatur cupiditate explicabo fugit nisi, officiis placeat quidem recusandae suscipit.Ad aliquid asperiores assumenda at consectetur dolorem dolores dolorum earum eligendi expedita, ipsa iste laboriosam laborum molestiae nihil nulla porro quae quasi rem repellat saepe sed sequi similique tenetur voluptates!Atque blanditiis quasi rem ullam velit. Accusantium ad amet asperiores cupiditate doloremque dolores ducimus facere id magnam minus nesciunt quasi qui quidem repellat repellendus sapiente sint, totam ut vitae voluptatibus.Cum dicta et molestias nesciunt quas? Ad animi blanditiis dignissimos expedita fuga harum inventore labore libero maiores nam nesciunt obcaecati quisquam, ratione soluta, suscipit tempore voluptatibus. Fugit iusto quas saepe!Atque delectus dolor dolores, doloribus enim eveniet, expedita, fuga fugit impedit inventore ipsa iure labore magnam magni minima mollitia nisi officia porro praesentium ratione repellendus suscipit ut? Molestias, necessitatibus, voluptas.Accusamus aliquid, architecto consectetur consequatur culpa cum cupiditate doloribus eaque error et ex excepturi illum inventore mollitia necessitatibus perferendis qui reiciendis sit sunt vel voluptate voluptatibus voluptatum? Consequuntur fugit, voluptatibus?A aliquam cumque cupiditate delectus doloribus expedita molestias nostrum, officiis perspiciatis quia quo sit temporibus velit? Alias, autem culpa, cupiditate dolore eligendi eos explicabo iusto maiores maxime minima perspiciatis provident!Adipisci commodi consectetur debitis et ex illum ipsa modi officia repellendus sed. Ab accusantium aliquid amet facere facilis illum iure iusto maiores neque numquam perferendis ratione recusandae, sit veritatis voluptates.</p>
    <button
        className="btn"
        onClick={onReturn}
    >
        Обратно к списку дел
    </button>
   </>
    )
}
