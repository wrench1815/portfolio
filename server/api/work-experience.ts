import prisma from '../helpers/prismaClient'

export default defineEventHandler(async (event) => {
  const workExperienceList = await prisma.workExperience.findMany()

  console.log(workExperienceList)

  return workExperienceList
})
