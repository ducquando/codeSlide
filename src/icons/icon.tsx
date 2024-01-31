/*
 * mydraft.cc
 *
 * @license
 * Created by Do Duc Quan on 10 Nov 2023
*/

import * as React from "react";
import Icon from "@ant-design/icons/lib/components/Icon";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const SMALL_SIZE = 16;
const DEFAULT_SIZE = 18;
const LARGE_SIZE = 20;

export const AnimationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={SMALL_SIZE} viewBox="0 -960 960 960" width={SMALL_SIZE}><path d="M360-116.001q-50.154 0-93.807-17.962-43.654-17.961-78.961-53.269-35.308-35.307-53.269-78.961-17.962-43.653-17.962-93.807 0-71 36.885-130.846 36.884-59.845 104.73-90.768 16.231-38.154 48.116-70.039 31.884-31.884 72.654-50.731 31.692-66.076 90.384-103.845 58.692-37.77 131.23-37.77 50.154 0 93.807 17.962 43.654 17.961 78.961 53.269 35.308 35.307 53.269 78.961 17.962 43.653 17.962 93.807 0 71.615-36.193 130.269-36.192 58.653-105.422 91.345-18.231 41.154-49.923 72.347-31.693 31.192-70.847 48.423-31.923 66.076-90.999 103.845-59.077 37.77-130.615 37.77Zm.769-51.999q38.77 0 79.386-18.27 40.616-18.269 66.616-52.039-56.539 7.385-107.77-11.769-51.231-19.154-91-58.538-39.769-39.77-58.423-90.308-18.654-50.539-11.269-107.077-33.385 26.384-51.847 66.423Q168-399.539 168-360q0 39 14 73.192 14 34.193 42 62.193 28.385 28 63.077 42.307Q321.769-168 360.769-168ZM480-288q46.309 0 84.309-20.578 38-20.577 62.692-49.731-55.153 7.385-106.884-11.077-51.731-18.461-92.501-58.846-40.769-40.769-58.73-90.808-17.962-50.038-10.577-106.192-30.308 24.846-49.924 62.539-19.616 37.692-19.616 82.693 0 39 14 73t41.616 62q28 28 62.307 42.5Q441-288 480-288Zm117.769-121q17 0 33.5-2.5t30.5-7.5q18-53 6-105.5t-51-91.5q-39-39-91.5-51t-105.5 6q-5 14-7.5 30.5t-2.5 33.5q0 37 14.5 71t40.5 60q27 27 62 42t71 15Zm124.691-45.768q32.231-25 50.886-61.846Q792-553.461 792-600q0-38-14.5-73T735-736q-28-28-62-42t-73-14q-42.078 0-79.578 18.847-37.5 18.846-65.654 51.462 58.154-7.385 107.885 10.577 49.731 17.961 90.5 58.346 40.769 40.769 58.731 90.308 17.961 49.538 10.576 107.692Z" /></svg>
);

export const BorderWidthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}><path d="M195.004-226.618v-37.999h570.992v37.999H195.004Zm0-109.999v-51.999h570.992v51.999H195.004Zm-1-123.999v-65.228h570.992v65.228H194.004Zm1-137.998v-134.768h570.992v134.768H195.004Z"/></svg>
)

export const CircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={LARGE_SIZE}><path d="M480.276-96Q401-96 331-126q-70-30-122.5-82.5T126-330.958q-30-69.959-30-149.5Q96-560 126-629.5t82.5-122Q261-804 330.958-834q69.959-30 149.5-30Q560-864 629.5-834t122 82.5Q804-699 834-629.276q30 69.725 30 149Q864-401 834-331q-30 70-82.5 122.5T629.276-126q-69.725 30-149 30ZM480-168q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" /></svg>
);

export const ColorBackgroundFill = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}>
        <path className='mono-tone' d="m224.462-885.537 36.384-37.537 329.153 329.153q18.077 18.077 17.577 41.615t-17.577 40.615L432.923-353.846q-17.692 17.692-41.23 17.692-23.538 0-41.23-17.692L193.387-512.691q-17.077-17.077-18.077-40.615t18.077-41.615L355.309-754.69 224.462-885.537Zm167.616 167.616L234.77-561.384q-1.923 1.924-1.5 4.039.423 2.116-1.577 4.424h320q0-2.308-.577-4.424-.577-2.115-2.501-4.039L392.078-717.921Zm331.46 443.768q-31.154 0-52.577-21.423-21.422-21.423-21.422-52.576 0-18.462 8.961-37.692 8.961-19.231 29.654-48.538 7.23-10.231 16.576-21.692 9.346-11.462 18.808-23.692 8.461 12.23 17.807 23.192 9.346 10.961 17.577 22.192 13.692 20.307 26.154 41.038 12.461 20.73 12.461 45.192 0 31.153-21.423 52.576-21.423 21.423-52.576 21.423Z"/>
        <path d="M96 0v-151.997h768V0H96Z"/>
    </svg>
);

export const ColorTextFill = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}>
        <path d="M116.001 0v-181.23h727.998v181.23h-727.998z"/>
        <path className='mono-tone' d="M271.616 -336l180.77 -459.999 h55.228l180.77 459.999h-59.153l-46.846 -123.769h-206.078l-47.077 123.769h-57.614z m121.768-171.999h171.694l-83.078 -214.001h-4.769l-83.847 214.001z"/>
    </svg>
);

export const ColorBorderFill = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}>
        <path d="M96 0v-151.997h768V0H96Z"/>
        <path className='mono-tone' d="M264 -343.46h44.461l299.002 -299.386l-22.154 -23.539l-21.923 -20.538L264 -387.921v44.461Z m-51.999 51.998v-117.915l402.385 -402.852q8.692 -8.692 18.067 -12.153q9.374 -3.462 19.468 -3.462t19.279 3.462q9.184 3.461 17.596 11.71l43.972 43.751q8.308 8.692 11.961 17.908q3.654 9.217 3.654 19.578q0 9.714 -3.662 19.36 q-3.662 9.647 -11.653 17.63 L329.999 -291.462H212.001Z m483.384 -441.922l-44.461 -42.461l44.461 42.461Z m-87.922 90.538 l-22.154 -23.539l-21.923 -20.538l44.077 44.077Z"/>
    </svg>
);

export const DesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={SMALL_SIZE} viewBox="0 -960 960 960" width={SMALL_SIZE}><path d="m365.154-494.845 92.693-92.308-67.078-67.693-47.154 46.154-36.153-36.153 46.539-47.154-72.54-71.54-92.308 92.308 176.001 176.386Zm305.692 305.307 92.308-92.308-70.54-71.539-47.154 46.538L609.307-343l46.539-47.154-68.309-67.693-92.692 92.693 176.001 175.616ZM686.461-744l57.154 57.154L686.461-744ZM295.077-164.001H164.001v-131.076l164.385-163.384-212.385-212.77 165.46-165.459L494.23-624.306l155.848-156.462q8.307-8.308 17.461-11.769 9.153-3.462 19.307-3.462 10.153 0 19.307 3.462 9.153 3.461 17.461 11.769l57.154 57.923q8.308 8.308 11.577 17.461 3.269 9.154 3.269 19.308 0 10.153-3.269 19.307-3.269 9.153-11.577 17.461L624.69-494.23l212 212.769-165.459 165.46-212.77-212.385-163.384 164.385ZM216-216h57.539l375.385-375.769-57.155-57.155L216-273.539V-216Zm404.846-405.231-29.077-27.693 57.155 57.155-28.078-29.462Z" /></svg>
);

export const DiamondIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={LARGE_SIZE}><path d="M480-268.464 268.464-480 480-691.536 691.536-480 480-268.464ZM480-342l138-138-138-138-138 138 138 138Zm0-138Z"/></svg>
);

export const FullscreenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={SMALL_SIZE} viewBox="0 -960 960 960" width={SMALL_SIZE}><path d="M164.001-164.001v-180.461H216V-216h128.462v51.999H164.001Zm451.921 0V-216h128.463v-128.462h51.998v180.461H615.922ZM164.001-615.538v-180.461h180.461V-744H216v128.462h-51.999Zm580.384 0V-744H615.922v-51.999h180.461v180.461h-51.998Z"/></svg>
)

export const FunctionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={LARGE_SIZE}><path d="M384-240v-72h70l99-120-99-120h-55l-64 322q-8 39-35.5 62.5T237-144q-39 0-66-26.5T144-232q0-24 14-40t36-16q20 0 33 12.5t13 31.5q0 6-1.5 13t-4.5 14q2 1 3 1h3q10 0 15.5-7t8.5-21l62-308h-86v-72h100l21-106q8-39 35.5-62.5T459-816q39 0 66 26.5t27 61.5q0 24-14 40t-36 16q-20 0-33-12.5T456-716q0-6 1.5-13t4.5-14q-2-1-3-1h-3q-10 0-15.5 7t-8.5 21l-19 92h163v72h-29l53 64 53-64h-29v-72h192v72h-69L647-432l100 120h69v72H624v-72h29l-53-64-53 64h29v72H384Z" /></svg>
);

export const GraphicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}><path d="M597.615-168h58v-83l121-29q18.23-5 29.615-7.346 11.385-2.346 11.385-16.815 0-11.839-10.885-19.531-10.885-7.693-33.115-13.308-27.846-8-45.923-26.192-18.077-18.193-18.077-40.554 0-22.485 18.384-41.062Q746.384-463.385 777.23-474q25.231-8.231 38.808-22 13.577-13.769 13.577-29.239 0-15.376-11.385-26.569Q806.845-563 790.733-563q-8.734 0-17.915 3.5t-17.656 3.5q-25.778 0-43.663-18.508-17.884-18.508-17.884-43.912 0-23.811 13.5-45.888 13.5-22.077 13.5-43.955 0-16.968-16.193-26.352Q688.23-744 661.999-744q-20.692 0-32.538 11.808-11.846 11.808-11.846 32.5 0 15.692 2 43.884 2 28.193 2 44.654 0 33.692-17.847 48.923Q585.922-547 563.615-547q-13 0-25-3t-23.846-3q-5.77 0-9.962 2.394t-4.192 7.183q0 11.577 8.384 18.885 8.385 7.307 17.863 15.952 17.368 17.817 36.56 39.394 19.193 21.577 19.193 49.24 0 24.075-18.077 41.514Q546.461-361 521.23-361q-13.231 0-27.308-2.5t-28.077-2.5q-17.461 0-30.346 8-12.884 8-12.884 21.5 0 13.115 13.884 23.308Q450.384-303 473.615-299l124 18v113Zm-433.692 3.999-47.922-21.923 183.923-403.537 47.922 20.538-183.923 404.922Zm380.693 48v-121.715l-82.232-11.285q-41.692-5.231-66.922-27.662-25.231-22.43-25.231-53.876 0-36.537 25.923-61.229 25.922-24.692 67.076-25.846 12.615 0 24.154 1.269 11.539 1.27 22.231 2.885 7.309 0 11.732-4.039 4.423-4.038 4.423-10.577-1.922-7.308-9.076-16.462-7.154-9.155-17.539-18.001-15.692-14.538-32.193-32.807-16.5-18.269-16.5-44.654 0-25.768 15.789-44.46T518-603.152q11.538 0 20.346 2.461 8.808 2.462 17.654 2.692 7.308 0 10.77-5.577 3.461-5.577 3.461-17.501-1.769-19.462-2.577-39.216-.807-19.754-.807-38.056 0-44.617 26.692-71.134 26.692-26.516 70.306-26.516 46.595 0 77.797 24.192 31.202 24.192 31.587 60.423 0 24.923-11.616 45.308-11.616 20.384-13.769 41.384 0 6.155 3.846 10.578 3.847 4.423 9.616 4.423 7.539-1.615 15.073-3.269 7.533-1.654 16.236-1.654 36.255 0 62.627 27.43 26.371 27.43 26.371 67.184 0 38.461-25.692 62.999-25.692 24.538-65.384 34.23-10.001 3.462-15.001 7.886-5 4.423-5.385 9.808 3.923 6.693 13.769 13.116 9.847 6.424 24.694 10.731 29.23 11.693 44.922 31.685 15.693 19.993 15.693 45.391 0 33.246-28.231 51.93-28.231 18.684-66.999 28.223l-66.386 15.461v92.539H544.616ZM162.77-546q-22-24.693-34.384-55.249-12.385-30.556-12.385-64.042 0-74.684 52.292-126.696 52.291-52.012 126.829-52.012 33.494 0 65.032 12.193 31.538 12.192 55.23 33.576l-36.153 36.768q-17.769-15.461-39.325-23Q318.349-792 295.356-792q-52.747 0-90.051 36.955Q168-718.09 168-665.297q0 23.017 8.038 44.594 8.039 21.578 23.5 38.934L162.77-546Zm463.845 142.385Z"/></svg>
)

export const ImageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}><path d="M216-144q-29.7 0-50.85-21.5Q144-187 144-216v-528q0-29 21.15-50.5T216-816h528q29.7 0 50.85 21.5Q816-773 816-744v528q0 29-21.15 50.5T744-144H216Zm0-72h528v-528H216v528Zm48-72h432L552-480 444-336l-72-96-108 144Zm-48 72v-528 528Z" /></svg>
);

export const HeadingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={LARGE_SIZE} viewBox="0 -960 960 960" width={LARGE_SIZE}><path d="M192-288v-384h72v156h168v-156h72v384h-72v-156H264v156h-72Zm504 0v-312h-96v-72h168v384h-72Z" /></svg>
);

export const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={LARGE_SIZE}><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" /></svg>
);

export const RectangleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={LARGE_SIZE}><path d="M96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm0 0v-432 432Z" /></svg>
);

export const RoundedRectangleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={LARGE_SIZE}><path d="M216.309-140.001q-31.958 0-54.133-22.175-22.175-22.175-22.175-54.133v-527.382q0-31.958 22.175-54.133 22.175-22.175 54.133-22.175h527.382q31.958 0 54.133 22.175 22.175 22.175 22.175 54.133v527.382q0 31.958-22.175 54.133-22.175 22.175-54.133 22.175H216.309Zm0-63.999h527.382q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-527.382q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H216.309q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847v527.382q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462ZM204-204V-756-204Z"/></svg>
);

export const ShapesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}><path d="M600-360ZM320-242q10 1 19.5 1.5t20.5.5q11 0 20.5-.5T400-242v82h400v-400h-82q1-10 1.5-19.5t.5-20.5q0-11-.5-20.5T718-640h82q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400q-33 0-56.5-23.5T320-160v-82Zm40-78q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320Zm0-80q83 0 141.5-58.5T560-600q0-83-58.5-141.5T360-800q-83 0-141.5 58.5T160-600q0 83 58.5 141.5T360-400Zm0-200Z" /></svg>
);

export const SubHeadingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={LARGE_SIZE}><path d="M144-288v-384h72v156h168v-156h72v384h-72v-156H216v156h-72Zm384 0v-156q0-29.7 21.15-50.85Q570.3-516 600-516h144v-84H528v-72h216.264Q774-672 795-650.85q21 21.15 21 50.85v84q0 29.7-21.15 50.85Q773.7-444 744-444H600v84h216v72H528Z" /></svg>
);

export const TableIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133ZM200-413h133v-134H200v134Zm213 0h134v-134H413v134Zm214 0h133v-134H627v134ZM200-627h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133Z"/></svg>
);

export const TextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}><path d="M432-192v-480H240v-96h480v96H528v480h-96Z"/></svg>
);

export const TriangleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={LARGE_SIZE}><path d="m96-192 384-576 384 576H96Zm134-72h500L480-638 230-264Zm250-187Z" /></svg>
);

export const ParagraphIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={SMALL_SIZE} viewBox="0 -960 960 960" width={LARGE_SIZE}><path d="m171-288 144-384h69l144 384h-66l-34-98H273l-35 98h-67Zm121-154h115l-56-159h-3l-56 159Zm358 164q-47 0-73.5-24.5T550-370q0-41 30.5-66t80.5-25q21 0 42 4t32 10v-14q0-24-19-40t-48-16q-21 0-37.5 8.5T600-483l-41-32q17-25 46.5-38.5T670-567q58 0 90 28.5t32 81.5v169h-57v-31h-3q-16 21-35.5 31T650-278Zm10-50q32 0 53-21.5t21-52.5q-14-8-29.5-12t-32.5-4q-29 0-46 13t-17 34q0 20 14 31.5t37 11.5Z" /></svg>
);

export const PresentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}><path d="M840-172.464v-569.228q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H132.309q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847v347.691H68.001v-347.691q0-26.527 18.89-45.417 18.891-18.89 45.418-18.89h695.382q26.527 0 45.417 18.89 18.891 18.89 18.891 45.417v509.922q0 22.076-14.996 39.345T840-172.464ZM336-396.309q-51.749 0-87.874-36.124-36.125-36.125-36.125-87.874 0-51.75 36.125-87.874 36.125-36.125 87.874-36.125 51.749 0 87.874 36.125 36.125 36.124 36.125 87.874 0 51.749-36.125 87.874-36.125 36.124-87.874 36.124Zm.212-51.998q29.788 0 50.788-21.213 21-21.212 21-51 0-29.787-21.212-50.787-21.213-21-51-21-29.788 0-50.788 21.212-21 21.213-21 51 0 29.788 21.212 50.788 21.213 21 51 21ZM68.002-123.694v-68.922q0-21.384 10.96-38.922 10.962-17.538 30.654-30 51.308-31.077 109.345-46.615Q276.997-323.691 336-323.691q59.384 0 116.23 15.538 56.846 15.538 110.154 46.615 19.692 11.462 30.653 29.61 10.962 18.148 10.962 39.312v68.922H68.001ZM120-175.693h432v-20.923q0-6.33-4.564-11.912-4.563-5.581-12.59-9.473-45.692-25.461-95.918-39.577Q388.702-271.693 336-271.693t-103.428 14.115q-50.726 14.116-95.418 39.577-8.077 4.539-12.615 9.92-4.539 5.38-4.539 11.465v20.923Zm216-344.614Zm0 344.614Z" /></svg>
)

export const VectorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height={DEFAULT_SIZE} viewBox="0 -960 960 960" width={DEFAULT_SIZE}><path d="M239.663-548.001q-71.145 0-121.403-50.166-50.259-50.165-50.259-121.339 0-72.032 50.166-122.262 50.165-50.231 121.339-50.231 72.032 0 122.262 50.167 50.231 50.166 50.231 122.168 0 71.146-50.167 121.404-50.166 50.259-122.169 50.259ZM240-600q50 0 85-35t35-85q0-50-35-85t-85.495-35Q190-840 155-805q-35 35-35 85.495Q120-670 155-635q35 35 85 35ZM660.309-68.001q-26.527 0-45.417-18.89-18.891-18.891-18.891-45.418v-167.382q0-26.527 18.891-45.417 18.89-18.891 45.417-18.891h167.382q26.527 0 45.417 18.891 18.891 18.89 18.891 45.417v167.382q0 26.527-18.891 45.417-18.89 18.89-45.417 18.89H660.309Zm0-51.999h167.382q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-167.382q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H660.309q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847v167.382q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462ZM744-216ZM240-720Zm438.999 77.769-361.23 361.23q7 11.462 10.308 24.212 3.307 12.75 3.307 25.403 0 41.666-29.223 70.833-29.224 29.166-71.18 29.166-41.133 0-70.363-29.174-29.231-29.174-29.231-70.852 0-41.511 29.166-70.741 29.167-29.23 70.833-29.23 12.653 0 25.403 3.307 12.75 3.308 24.212 10.308l361.23-361.23q-6-12.462-9.808-24.729-3.807-12.267-3.807-24.671 0-41.715 29.174-70.964 29.174-29.25 70.851-29.25 41.511 0 70.741 29.224 29.231 29.223 29.231 71.179 0 41.134-29.25 70.364-29.249 29.23-70.964 29.23-12.404 0-24.671-3.807-12.267-3.808-24.729-9.808Z"/></svg>
)

interface IconOutlineProps {
    // SVG icon
    icon: () => React.JSX.Element;
}

export const IconOutline = (props: 
Partial<CustomIconComponentProps> & IconOutlineProps) => {
    const { icon, ...other } = props;
    return <Icon component={icon} {...other} />
};