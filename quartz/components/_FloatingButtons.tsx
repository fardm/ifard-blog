import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/_floatingButtons.scss"
import script from "./scripts/_floatingButtons.inline"

export default (() => {
  const FloatingButtons: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (      
        <div class="floating-buttons">
          <div class="button-group">
            <button
              class="floating-button"
              onclick="location.href='#'"
            >
              <span class="floating-button-tooltip">scroll to top</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
            <button
                class="floating-button"
                id="random-page-button"
              >
                <span class="floating-button-tooltip">Random page</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 7H4.77985C6.93172 7 8.00766 7 8.87921 7.45631C9.25172 7.65134 9.59114 7.90388 9.88499 8.20464C10.5725 8.90832 10.8817 9.93888 11.5 12V12C12.1183 14.0611 12.4275 15.0917 13.115 15.7954C13.4089 16.0961 13.7483 16.3487 14.1208 16.5437C14.9923 17 16.0683 17 18.2202 17H21M21 17L18 14M21 17L18 20" stroke="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3536 6.64648L18.3536 3.64648L17.6464 4.35359L19.7929 6.50004H18.2202H18.1963C17.1406 6.50003 16.3153 6.50003 15.6464 6.55901C14.964 6.61918 14.405 6.74317 13.8889 7.01339C13.4698 7.2328 13.0879 7.51691 12.7574 7.85526C12.7386 7.87444 12.7202 7.8938 12.7019 7.91335C12.8289 8.16228 12.9399 8.41464 13.0406 8.66741C13.0782 8.7617 13.1154 8.85879 13.1523 8.95851C13.2519 8.80434 13.3571 8.6724 13.4727 8.5541C13.7298 8.29094 14.0268 8.06996 14.3527 7.89931C14.7081 7.71321 15.1228 7.60905 15.7343 7.55514C16.3542 7.50049 17.1355 7.50004 18.2202 7.50004H19.7929L17.6464 9.64648L18.3536 10.3536L21.3536 7.35359L21.7071 7.00004L21.3536 6.64648ZM10.2981 16.0867C10.1711 15.8378 10.0601 15.5854 9.95935 15.3327C9.92175 15.2384 9.88456 15.1413 9.84766 15.0416C9.74807 15.1957 9.64293 15.3277 9.52735 15.446C9.27024 15.7091 8.97324 15.9301 8.6473 16.1008C8.29185 16.2869 7.87716 16.391 7.26574 16.4449C6.64583 16.4996 5.86454 16.5 4.77985 16.5H3V17.5H4.77985H4.80369C5.85944 17.5 6.68467 17.5 7.35357 17.4411C8.03597 17.3809 8.59502 17.2569 9.11113 16.9867C9.5302 16.7673 9.91205 16.4832 10.2426 16.1448C10.2614 16.1256 10.2798 16.1063 10.2981 16.0867Z" fill="currentColor"></path> </g></svg>
              </button>
          </div>
        </div>
    )
  }

  FloatingButtons.css = style
  FloatingButtons.afterDOMLoaded = script
  return FloatingButtons
}) satisfies QuartzComponentConstructor
