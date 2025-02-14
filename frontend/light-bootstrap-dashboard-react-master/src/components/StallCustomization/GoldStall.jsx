/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/stalls/goldStall.gltf
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useStallCustomization } from "contexts/StallCustomizationContext";

const GoldStall = (props) => {
  const group = useRef();

  const { nodes, materials } = useGLTF("./stalls/goldStall.gltf");

  const { stallColor, setStallColor } = useStallCustomization();


   useEffect(() => {
     if (stallColor == null) {
       setStallColor(`#${materials.gold_7.color.getHexString()}`);
     }
   }, []);
  
  // useEffect(() => {
  //   setStallColor(`#${materials.gold_7.color.getHexString()}`);
  // }, []);

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
        <group position={[0, -384, 0]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes.Scene_1.geometry} material={materials.white} />
          <mesh geometry={nodes.Scene_2.geometry} material={materials.gold_7}>
            <meshStandardMaterial {...materials.gold_7} color={stallColor} />
          </mesh>
          <mesh
            geometry={nodes.Scene_3.geometry}
            material={materials.light_2}
          />
          <group position={[-5280.1, -671, 0]}>
            <group
              position={[4817.4, 791.6, -333]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <group position={[-2, 0, 0]}>
                <mesh
                  geometry={nodes.Scene010.geometry}
                  material={materials.white}
                />
                <mesh
                  geometry={nodes.Scene010_1.geometry}
                  material={materials.black}
                />
                <mesh
                  geometry={nodes.Scene010_2.geometry}
                  material={materials.light}
                />
                <mesh
                  geometry={nodes.Scene010_3.geometry}
                  material={materials.chrome}
                />
              </group>
              <group position={[-10.9, 0, 0]}>
                <mesh
                  geometry={nodes.Scene011.geometry}
                  material={materials.white}
                />
                <mesh
                  geometry={nodes.Scene011_1.geometry}
                  material={materials.chrome}
                />
                <mesh
                  geometry={nodes.Scene011_2.geometry}
                  material={materials.black}
                />
                <mesh
                  geometry={nodes.Scene011_3.geometry}
                  material={materials.light}
                />
              </group>
            </group>
            <group
              position={[5695.7, 791.6, -333]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <group position={[-2.4, 0, 0]}>
                <mesh
                  geometry={nodes.Scene010.geometry}
                  material={materials.white}
                />
                <mesh
                  geometry={nodes.Scene010_1.geometry}
                  material={materials.black}
                />
                <mesh
                  geometry={nodes.Scene010_2.geometry}
                  material={materials.light}
                />
                <mesh
                  geometry={nodes.Scene010_3.geometry}
                  material={materials.chrome}
                />
              </group>
              <group position={[-10.9, 0, 0]}>
                <mesh
                  geometry={nodes.Scene011.geometry}
                  material={materials.white}
                />
                <mesh
                  geometry={nodes.Scene011_1.geometry}
                  material={materials.chrome}
                />
                <mesh
                  geometry={nodes.Scene011_2.geometry}
                  material={materials.black}
                />
                <mesh
                  geometry={nodes.Scene011_3.geometry}
                  material={materials.light}
                />
              </group>
            </group>
            <group position={[5711, 625, -13]} rotation={[0, 0, -Math.PI]}>
              <mesh
                geometry={nodes.round_coffee_table_001.geometry}
                material={materials.glass}
              />
              <mesh
                geometry={nodes.round_coffee_table_1.geometry}
                material={materials.round_coffee_table}
                position={[-11.3, 0, 3.4]}
              ></mesh>
            </group>
            <mesh
              geometry={nodes.Cooler_reception__1__1.geometry}
              material={materials.M_cooler_reception}
              position={[4845, 521.6, -8]}
            >
              <mesh
                geometry={nodes.cooler_1.geometry}
                material={materials.Cooler}
                position={[0, 4.51, -66.54]}
              >
                <mesh
                  geometry={nodes.Bottle_1.geometry}
                  material={materials.Cooler}
                  position={[0, 0, -90]}
                />
              </mesh>
            </mesh>
            <mesh
              geometry={nodes.flower_2_1.geometry}
              material={materials.flower}
              position={[4841.3, 934.1, -134.2]}
            />
            <mesh
              geometry={nodes.flower_2__1__1.geometry}
              material={materials.flower}
              position={[5015.9, 934.1, -134.2]}
              rotation={[0, 0, -1.58]}
            />
            <mesh
              geometry={nodes.flower_2__2__1.geometry}
              material={materials.flower}
              position={[5692.8, 934.1, -134.2]}
              rotation={[0, 0, -2.37]}
            />
            <mesh
              geometry={nodes.flower_2__3__1.geometry}
              material={materials.flower}
              position={[5518.2, 934.1, -134.2]}
              rotation={[0, 0, 0.57]}
            />
            <group
              position={[5730, 843, -10.7]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                geometry={nodes.Scene012.geometry}
                material={materials.metal}
              />
              <mesh
                geometry={nodes.Scene012_1.geometry}
                material={materials.glass}
              />
            </group>
            <group
              position={[4784.8, 847, -10.7]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <mesh
                geometry={nodes.Scene012.geometry}
                material={materials.metal}
              />
              <mesh
                geometry={nodes.Scene012_1.geometry}
                material={materials.glass}
              />
            </group>
            <mesh
              geometry={nodes.pouf_2.geometry}
              material={materials.pouf_3}
              position={[5722, 711, -0.05]}
              rotation={[0, 0, -Math.PI]}
            />
            <mesh
              geometry={nodes.pouf_2__1_.geometry}
              material={materials.pouf_3}
              position={[5722, 550, -0.05]}
              rotation={[0, 0, -Math.PI]}
            />
          </group>
        </group>
        <mesh geometry={nodes.Scene_1.geometry} material={materials.white} />
        <mesh geometry={nodes.Scene_2.geometry} material={materials.gold_7}>
          <meshStandardMaterial {...materials.gold_7} color={stallColor} />
        </mesh>
        <mesh geometry={nodes.Scene_3.geometry} material={materials.light_2} />
        <group position={[-5275, -670, 0]}>
          <group
            position={[4817.4, 791.6, -333]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[-2, 0, 0]}>
              <mesh
                geometry={nodes.Scene010.geometry}
                material={materials.white}
              />
              <mesh
                geometry={nodes.Scene010_1.geometry}
                material={materials.black}
              />
              <mesh
                geometry={nodes.Scene010_2.geometry}
                material={materials.light}
              />
              <mesh
                geometry={nodes.Scene010_3.geometry}
                material={materials.chrome}
              />
            </group>
            <group position={[-10.9, 0, 0]}>
              <mesh
                geometry={nodes.Scene011.geometry}
                material={materials.white}
              />
              <mesh
                geometry={nodes.Scene011_1.geometry}
                material={materials.chrome}
              />
              <mesh
                geometry={nodes.Scene011_2.geometry}
                material={materials.black}
              />
              <mesh
                geometry={nodes.Scene011_3.geometry}
                material={materials.light}
              />
            </group>
          </group>
          <group
            position={[5695.7, 791.6, -333]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[-2.4, 0, 0]}>
              <mesh
                geometry={nodes.Scene010.geometry}
                material={materials.white}
              />
              <mesh
                geometry={nodes.Scene010_1.geometry}
                material={materials.black}
              />
              <mesh
                geometry={nodes.Scene010_2.geometry}
                material={materials.light}
              />
              <mesh
                geometry={nodes.Scene010_3.geometry}
                material={materials.chrome}
              />
            </group>
            <group position={[-10.9, 0, 0]}>
              <mesh
                geometry={nodes.Scene011.geometry}
                material={materials.white}
              />
              <mesh
                geometry={nodes.Scene011_1.geometry}
                material={materials.chrome}
              />
              <mesh
                geometry={nodes.Scene011_2.geometry}
                material={materials.black}
              />
              <mesh
                geometry={nodes.Scene011_3.geometry}
                material={materials.light}
              />
            </group>
          </group>
          <mesh
            geometry={nodes.Cooler_reception__1_.geometry}
            material={materials.M_cooler_reception}
            position={[4845, 521.6, -8]}
          >
            <mesh
              geometry={nodes.cooler.geometry}
              material={materials.Cooler}
              position={[0, 4.51, -66.54]}
            >
              <mesh
                geometry={nodes.Bottle.geometry}
                material={materials.Cooler}
                position={[0, 0, -90]}
              />
            </mesh>
          </mesh>
          <mesh
            geometry={nodes.flower_2.geometry}
            material={materials.flower}
            position={[4841.3, 934.1, -134.2]}
          />
          <mesh
            geometry={nodes.flower_2__1_.geometry}
            material={materials.flower}
            position={[5015.9, 934.1, -134.2]}
            rotation={[0, 0, -1.58]}
          />
          <mesh
            geometry={nodes.flower_2__2_.geometry}
            material={materials.flower}
            position={[5692.8, 934.1, -134.2]}
            rotation={[0, 0, -2.37]}
          />
          <mesh
            geometry={nodes.flower_2__3_.geometry}
            material={materials.flower}
            position={[5518.2, 934.1, -134.2]}
            rotation={[0, 0, 0.57]}
          />
          <mesh
            geometry={nodes.OfficeTable.geometry}
            material={materials.OfficeTable}
            position={[5693, 653, -7]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes.Chair_2.geometry}
              material={materials.Chair_2}
              position={[13, 15.5, 0]}
              rotation={[0, 0, -Math.PI]}
            />
            <mesh
              geometry={nodes.indoor_plant.geometry}
              material={materials.indoor_plant_default_color}
              position={[-49, -25, -72.73]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              geometry={nodes.Notebook.geometry}
              material={materials.Notebook}
              position={[10, -34, -75.71]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <mesh
                geometry={nodes.Notebook_Cap.geometry}
                material={materials.Notebook}
                position={[-14.19, 0, -0.69]}
              />
            </mesh>
          </mesh>
          <group position={[5730, 843, -10.7]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              geometry={nodes.Scene012.geometry}
              material={materials.metal}
            />
            <mesh
              geometry={nodes.Scene012_1.geometry}
              material={materials.glass}
            />
          </group>
          <group position={[4784.8, 847, -10.7]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              geometry={nodes.Scene012.geometry}
              material={materials.metal}
            />
            <mesh
              geometry={nodes.Scene012_1.geometry}
              material={materials.glass}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default GoldStall;
useGLTF.preload(".stalls/goldStall.gltf");
