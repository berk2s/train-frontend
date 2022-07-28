import { clientJSON, clientMultipart } from '../axios.services'
import { tokenService } from '../token-service/token.services'
import {
  CreatePackageRequest,
  PTPackageResponse,
  UpdatePackageRequest,
} from '../types'

export const personalTrainerService = {
  uploadCertificates,
  getMyPackages,
  createPackage,
  getPTPackageById,
  updatePTPackage,
  deletePTPackage,
}

async function uploadCertificates(images: any[]) {
  const formData = new FormData()
  images.forEach((image) => {
    formData.append('certificates', image)
  })

  const updatePT = await clientMultipart.put(
    `users/personal-trainers/certificates`,
    formData,
    {
      headers: {
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    },
  )

  return updatePT
}

async function getMyPackages(): Promise<PTPackageResponse[]> {
  const myPackages: PTPackageResponse[] = await clientJSON.get(
    '/users/personal-trainers/packages',
  )

  return Promise.resolve(myPackages)
}

async function createPackage(
  req: CreatePackageRequest,
): Promise<PTPackageResponse> {
  const packages: PTPackageResponse = await clientJSON.post(
    '/users/personal-trainers/packages',
    JSON.stringify(req),
  )

  return Promise.resolve(packages)
}

async function getPTPackageById(packageId: string): Promise<PTPackageResponse> {
  const packageRes: PTPackageResponse = await clientJSON.get(
    `/users/personal-trainers/packages/${packageId}`,
  )

  return Promise.resolve(packageRes)
}

async function updatePTPackage(
  packageId: string,
  req: UpdatePackageRequest,
): Promise<PTPackageResponse> {
  const packageRes: PTPackageResponse = await clientJSON.put(
    `/users/personal-trainers/packages/${packageId}`,
    JSON.stringify(req),
  )

  return Promise.resolve(packageRes)
}

async function deletePTPackage(packageId: string): Promise<PTPackageResponse> {
  const packageRes: PTPackageResponse = await clientJSON.delete(
    `/users/personal-trainers/packages/${packageId}`,
  )

  return Promise.resolve(packageRes)
}
