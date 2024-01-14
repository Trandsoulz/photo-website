import { image } from "@nextui-org/react";
import Image from "next/image";
// type Props = {
//   image: string;
//   alt: string;
//   height: number;
//   width: number;
// };

const ImageComponent = ({ params }: { params: { id: string } }) => {
  const imgId = params.id;

  return (
    <main className="h-[85vh] overflow-y-auto scrollRemove scroll bg-white">
      <h1>This is the ID of the image {imgId}</h1>
      <div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil in animi ipsa quaerat. Doloribus recusandae sequi commodi adipisci a. Quam nobis sed deleniti unde tempora nulla officiis et maxime animi.</div>
        <div>Distinctio incidunt quibusdam amet sint assumenda ratione. Inventore pariatur error odit, aut corporis accusantium asperiores nesciunt architecto? Perferendis, minus, totam praesentium quae, dolor unde modi quo quisquam atque ad excepturi.</div>
        <div>Corrupti sit accusamus placeat blanditiis eveniet harum itaque ratione aut nam perspiciatis dolores, unde nihil quis libero ea officia tempore fuga laboriosam illum dicta. Minus animi laudantium facere odio deserunt.</div>
        <div>Eos illo nihil repellat ullam nobis ad nulla dolorem, quam saepe facilis eum quos commodi ut eaque at odit culpa. Error, possimus placeat excepturi enim quisquam qui eius commodi modi!</div>
        <div>Esse sapiente suscipit quae architecto sint quidem officiis, dolorum ea eius a illum blanditiis sit, quos dolores distinctio itaque voluptates voluptatum, maiores facere perspiciatis? Dicta nostrum velit autem quae quia?</div>
        <div>Similique porro obcaecati quisquam commodi voluptates corporis modi, eaque rerum deserunt suscipit, numquam et? Corporis deserunt explicabo, ducimus delectus quisquam aliquid cum sit enim animi iste nam pariatur numquam dolores.</div>
        <div>Tempore nisi voluptates officia cumque eaque? Eum modi, vel cumque dolorum quasi accusamus doloribus qui sunt dolore animi consectetur repudiandae nisi neque. Ipsa quis, velit maiores veritatis eos debitis ad!</div>
        <div>Labore inventore similique, a beatae voluptas amet, adipisci at quos impedit odio natus consequuntur praesentium numquam saepe! Blanditiis, quia. Cum dolor alias reprehenderit molestias architecto numquam incidunt blanditiis neque quod.</div>
        <div>Maxime error ex, assumenda soluta minus iure vero sint esse necessitatibus facilis culpa sunt recusandae quibusdam. Unde culpa ea error. Ab, animi vel. Dignissimos molestias, omnis consectetur delectus accusamus sit.</div>
        <div>Illo suscipit, ullam minima quis autem at possimus nobis nisi quibusdam repudiandae consequuntur. Iure aliquam reprehenderit minima illum magnam, quas ducimus est eligendi dolore odit aspernatur, ad reiciendis. Architecto, ea?</div>
        <div>Aliquid quo cum asperiores fugit veritatis labore similique nesciunt eum quidem illum, provident error perferendis, deleniti non autem magni ea officiis accusamus quam dicta ipsum pariatur vitae? Quo, temporibus necessitatibus!</div>
        <div>Corrupti, provident. Voluptatibus atque molestiae numquam nobis totam tenetur, cum corrupti rem ut ipsa, ducimus rerum qui id deserunt, quibusdam consequuntur libero! Quisquam ad quod aut quo accusamus, at nostrum.</div>
        <div>Aut sequi ratione porro nostrum, id error eos maiores dolores expedita vitae quod, dolorem nesciunt officia reiciendis tenetur quaerat accusantium quidem ad, veritatis est omnis. Consectetur nobis id minus natus.</div>
        <div>Iusto explicabo doloribus tempora dolorum magni odio a minus rerum suscipit aspernatur hic itaque ab, inventore placeat libero nemo earum necessitatibus modi, molestiae error iste eaque. Eius corrupti quod obcaecati!</div>
        <div>Aliquid, qui laudantium! Nisi, reprehenderit? Reprehenderit, tempora. Distinctio asperiores accusamus deleniti exercitationem molestias totam porro nostrum error, quos dolor aut corrupti dicta, placeat voluptates? Maxime animi quis unde ipsam enim!</div>
        <div>Ipsum eveniet totam optio, quaerat tenetur deserunt obcaecati recusandae, repudiandae amet deleniti molestias, consequuntur inventore! Dolorem facere cum vero modi, nobis provident atque voluptatum quis commodi rerum reprehenderit mollitia culpa!</div>
        <div>Nobis voluptatibus dolores repudiandae dolore eos, ex facere porro ab dignissimos quo beatae necessitatibus officiis voluptate at quaerat omnis fugit alias accusamus ducimus perferendis neque repellendus assumenda! Eius, praesentium vel?</div>
        <div>Ea non quis iusto corporis eaque vitae optio! Laudantium dolore a quia totam quos aut fugiat ducimus amet odit. Culpa, recusandae eius fuga maiores fugiat nam mollitia tenetur beatae similique.</div>
        <div>Porro consequuntur omnis, eos aliquid voluptate laudantium beatae quis sapiente tempora dolores. Beatae enim, sed et optio tempore cupiditate, repellendus quo, modi debitis corrupti iure libero earum numquam exercitationem harum?</div>
      </div>

      {/* <Image src={image} alt={alt} height={height} width={width} /> */}
    </main>
  );
};

export default ImageComponent;
