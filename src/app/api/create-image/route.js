
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req) {
 
  const { mainingredient,dishtype,theme,garnish } = await req.json();

  const output = await replicate.run(
    "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    {
      input: {
        width: 768,
        height: 768,
        prompt: `isometric view chesese ${dishtype} in night fine dining using ${mainingredient}, in a concept of ${theme}, ontop woth a ${garnish}. serving on luxury black plate in the most expensive restaurant on earth  `,
        refine: "expert_ensemble_refiner",
        scheduler: "K_EULER",
        lora_scale: 0.6,
        num_outputs: 1,
        guidance_scale: 7.5,
        apply_watermark: false,
        high_noise_frac: 0.8,
        negative_prompt: "",
        prompt_strength: 0.8,
        num_inference_steps: 25
      }
    }
  );
  console.log(output);
  

  return Response.json({ 
    status: "ok",
    answer: "done!!!",
    output: output[0] 
});


 } 